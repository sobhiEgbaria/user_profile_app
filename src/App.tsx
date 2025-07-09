import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export interface User {
  name: string;
  email: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<number>(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  useEffect(() => {
    if (userId > 10) {
      setHasMoreUsers(false);
      return;
    }
    const fetchUserData = async () => {
      const res = await fetch(
        `http://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await res.json();
      const userDetails: User = {
        name: data.name || "",
        email: data.email || "",
        age: Math.floor(Math.random() * 30) + 20,
      };

      setUser(userDetails);
    };
    fetchUserData();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <NavBar />
      {user == null && <Spinner />}
      {user !== null && hasMoreUsers == true && (
        <Form user={user} setUserId={setUserId} />
      )}
      {hasMoreUsers == false && (
        <Footer setUserId={setUserId} setHasMoreUsers={setHasMoreUsers} />
      )}
    </div>
  );
}

export default App;
