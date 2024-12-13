extern crate bindgen;

use bindgen;
use std::env;
use std::path::PathBuf;

fn main() {
    // Tell cargo to link Boost and OpenSSL
    println!("cargo:rustc-link-lib=boost_system");
    println!("cargo:rustc-link-lib=ssl");

    // Tell cargo to include the Boost and OpenSSL header paths
    println!("cargo:include=/path/to/boost/include");
    println!("cargo:include=/path/to/openssl/include");

    // Generate bindings to Boost (e.g., Boost.System)
    let bindings = bindgen::Builder::default()
        .header("/path/to/boost/include/boost/system.hpp")
        .generate()
        .expect("Unable to generate bindings");

    // Write the bindings to a file
    let out_path = PathBuf::from(env::var("OUT_DIR").unwrap());
    bindings
        .write_to_file(out_path.join("boost_bindings.rs"))
        .expect("Couldn't write bindings!");
}
