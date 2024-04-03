
// import crypto from 'crypto';

// const keyword = 'Jatin Singh'; // Variable to store the keyword or plaintext

// // Encryption
// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32); // Generate a secure random key
// const iv = crypto.randomBytes(16); // Generate a random IV
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// let encryptedData = cipher.update(keyword, 'utf-8', 'hex');
// encryptedData += cipher.final('hex');

// // Decryption
// const decipher = crypto.createDecipheriv(algorithm, key, iv);
// let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
// decryptedData += decipher.final('utf-8');

// console.log('Keyword:', keyword);
// console.log('Encrypted:', encryptedData);
// console.log('Decrypted:', decryptedData);


import pool from 'C:/Users/princ/OneDrive/Desktop/test/admindashbord/db/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    
    try {
        const client = await pool.connect();
        console.log("tinku")
        console.log("dgvgvgtvgtvg7777777777777")
        const result = await client.query('SELECT * from a');
        const results = { 'results': (result) ? result.rows : null };
        client.release(); // Release the client connection here
        return NextResponse.json(results);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}