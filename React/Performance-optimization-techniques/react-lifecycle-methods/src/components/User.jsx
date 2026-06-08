import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  useEffect(() => {
    console.log("component Mounted and user fetched");
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const user = await resp.json();

      localStorage.setItem("users", JSON.stringify(user));

      setData(user);

      console.log(user);
    })();

    return () => {
      localStorage.clear();
      setData([]);
    };
  }, []);

  return (
    <div>
      {data.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
};

export default User;
