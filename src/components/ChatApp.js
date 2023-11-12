import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import '../../src/ChatApp.css';

export default function ChatApp() {

    const steps = [
        {
          id: "Greet",        
          message: "Hello, Welcome to our shop",        
          trigger: "Done",        
        },        
        {       
          id: "Done",        
          message: "Please enter your name!",        
          trigger: "waiting1",        
        },      
        {      
          id: "waiting1",      
          user: true,      
          trigger: "Name",      
        },      
        {       
          id: "Name",     
          message: "Hi {previousValue}, Please ask your quetions",     
          trigger: "issues",     
        },      
        {      
          id: "issues",   
          options: [   
            {    
              value: "Menu Inquiry",   
              label: "Menu Inquiry",        
              trigger: "Menu Inquiry",       
            },       
            { value: "Specials or Promotions", label: "Specials or Promotions", trigger: "Specials or Promotions" },       
          ],       
        },       
        {       
          id: "Menu Inquiry",       
          message:        
          "Would you like to see our menu?",        
          end: true,       
        },       
        {       
          id: "Specials or Promotions",       
          message:       
          "We have some special offers today! Would you like to know more about them?",       
          end: true,       
        },       
      ]; 
  return (
    <div className="chat-app-container">
      <Segment className="chat-app-segment">
        <ChatBot steps={steps} />
      </Segment>
    </div>
  )
}
