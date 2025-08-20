import { type Contact, type InsertContact, type ChatSession, type InsertChatSession } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Chat session methods
  createChatSession(chatSession: InsertChatSession): Promise<ChatSession>;
  getChatSessionsBySessionId(sessionId: string): Promise<ChatSession[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private chatSessions: Map<string, ChatSession>;

  constructor() {
    this.contacts = new Map();
    this.chatSessions = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createChatSession(insertChatSession: InsertChatSession): Promise<ChatSession> {
    const id = randomUUID();
    const chatSession: ChatSession = {
      ...insertChatSession,
      id,
      createdAt: new Date(),
    };
    this.chatSessions.set(id, chatSession);
    return chatSession;
  }

  async getChatSessionsBySessionId(sessionId: string): Promise<ChatSession[]> {
    return Array.from(this.chatSessions.values())
      .filter(session => session.sessionId === sessionId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage = new MemStorage();
