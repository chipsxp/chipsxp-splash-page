# Configuration file for storing API keys

import yaml
import subprocess

def load_api_key():
    with open('config.yaml', 'r') as file:
        config = yaml.safe_load(file)
    return config.get('openai-api-key')

# Example usage
if __name__ == "__main__":
    api_key = load_api_key()
    print(f"Loaded API Key: {api_key}")
    
    # Run Aider with the API key as a command-line argument
    if api_key:
        subprocess.run(["aider", "--openai-api-key", api_key, "--model", "gpt-4o", "--browser"])
    else:
        print("API key is missing or not properly formatted in config.yaml")
