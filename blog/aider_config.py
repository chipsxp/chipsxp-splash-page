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
    
    # List of models to run
    models = ["gpt-4o", "sonnet"]

    # Run Aider with the API key for each model
    if api_key:
        for model in models:
            subprocess.run(["aider", "--openai-api-key", api_key, "--model", model, "--browser"])
    else:
        print("API key is missing or not properly formatted in config.yaml")
