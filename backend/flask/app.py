from flask import Flask, jsonify, request
import rust_wrapper

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask with Rust Integration"

@app.route('/rust_hash', methods=['POST'])
def rust_hash():
    data = request.json.get('data')
    if not data:
        return jsonify({"error": "No data provided"}), 400
    hash_result = rust_wrapper.rust_hash(data.encode('utf-8'))
    return jsonify({"hash": hash_result.contents})

@app.route('/ssl_example', methods=['GET'])
def ssl_example():
    rust_wrapper.rust_ssl_example()
    return jsonify({"message": "Rust SSL example executed!"})

if __name__ == '__main__':
    app.run(debug=True)
