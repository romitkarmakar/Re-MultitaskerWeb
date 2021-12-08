import ChatBot from 'react-simple-chatbot';



export default function MChatBot () {
    const steps = [
        {
            id: '0',
            message: 'Welcome to react chatbot!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Bye!',
            end: true,
        },
    ];
    return (
        <ChatBot steps={ steps } />
    );

}