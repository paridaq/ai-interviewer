import  { useState } from "react";


        function MockChat() {
            const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
            const [input, setInput] = useState("");

            const handleSend = () => {
                if (input.trim() === "") return;

                const userMessage = { sender: "user", text: input };
                setMessages((prev) => [...prev, userMessage]);

                const botResponse = generateBotResponse(input);
                setMessages((prev) => [...prev, botResponse]);

                setInput("");
            };

            const generateBotResponse = (userInput: string) => {
                const questions = [
                    "What is your name?",
                    "How old are you?",
                    "What is your favorite color?",
                    "Where are you from?",
                ];
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
                return { sender: "bot", text: randomQuestion };
            };

            return (
                <div style={{ display: "flex", flexDirection: "column", height: "600px", width:'800px'}}>
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "10px",
                            backgroundColor: "#f5f5f5",
                        }}
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    justifyContent: message.sender === "user" ? "flex-end" : "flex-start",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: "60%",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        backgroundColor: message.sender === "user" ? "#d1e7dd" : "#f8d7da",
                                        color: "#000",
                                    }}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            padding: "10px",
                            borderTop: "1px solid #ccc",
                            backgroundColor: "#fff",
                        }}
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                marginRight: "10px",
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            );
        }

        export default MockChat;
    