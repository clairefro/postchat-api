// Inspired by https://github.com/AkileshRao/chat-server

interface User {
  id: string;
  roomId: string;
}

/* Serves as an ephemeral database of connected users */
const users: User[] = [];

const addUser = (args: User) => {
  const { id, roomId } = args;

  // TODO: remove? see what happens two different browsers
  const existingUser = users.find((user) => user.id === id);
  if (existingUser) return { error: `User with id ${id} already joined.` };

  const user = { id, roomId };
  users.push(user);
  return { user };
};

const getUser = (id: string) => {
  let user = users.find((user) => user.id == id);
  return user;
};

const deleteUser = (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUsers = (roomId: string) =>
  users.filter((user) => user.roomId === roomId);

export { User, addUser, getUser, deleteUser, getUsers };
