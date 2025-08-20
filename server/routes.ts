import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatSessionSchema } from "@shared/schema";
import { getChatbotResponse } from "../client/src/lib/chatbot-knowledge";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Here you would typically send an email notification
      // For now, we'll just log the contact submission
      console.log(`New contact submission from ${contact.email}: ${contact.subject}`);
      
      res.json({ success: true, message: "Contact form submitted successfully!", contact });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { sessionId, question } = req.body;
      
      if (!sessionId || !question) {
        return res.status(400).json({ message: "Session ID and question are required" });
      }

      // Get AI response based on ghee knowledge base
      const answer = await getChatbotResponse(question);
      
      const chatSession = await storage.createChatSession({
        sessionId,
        question,
        answer,
      });

      res.json({ answer, sessionId: chatSession.sessionId });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get chat history for a session
  app.get("/api/chat/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const chatHistory = await storage.getChatSessionsBySessionId(sessionId);
      res.json(chatHistory);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
