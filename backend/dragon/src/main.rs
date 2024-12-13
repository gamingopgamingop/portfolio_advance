extern crate openssl;

use openssl::ssl::{SslMethod, SslContext};
use openssl::hash::MessageDigest;
use openssl::sha::sha256;

pub fn ssl_example() {
    // Create SSL context
    let context = SslContext::new(SslMethod::tls()).unwrap();
    println!("SSL context created successfully!");
}

pub fn hash_example(data: &str) -> Vec<u8> {
    let hash = sha256(data.as_bytes());
    println!("Hashed data: {:?}", hash);
    hash.to_vec()
}
