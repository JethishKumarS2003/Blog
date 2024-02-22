import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-xzojwng-shard-00-00.3zxmqqh.mongodb.net:27017,ac-xzojwng-shard-00-01.3zxmqqh.mongodb.net:27017,ac-xzojwng-shard-00-02.3zxmqqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-cu4rtx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;