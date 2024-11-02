import React, { useState, useEffect } from 'react';
import { auth, db } from './firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';
import ProfileEdit from './components/ProfileEdit';

function App() {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
            const fetchedMessages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setMessages(fetchedMessages);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <div>
            <h1>Chat Hub</h1>
            {user ? (
                <>
                    <ProfileEdit />
                    <Chat messages={messages} />
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Register onUserRegistered={setUser} />
                    <Login onUserLoggedIn={setUser} />
                </>
            )}
        </div>
    );
}

export default App;
