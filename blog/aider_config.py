# Configuration file for storing API keys

import yaml
import subprocess
from concurrent.futures import ThreadPoolExecutor

def load_api_key(model_name):
    with open('config.yaml', 'r') as file:
        config = yaml.safe_load(file)
    return config.get(f'{model_name}-api-key')

# Example usage
if __name__ == "__main__":
    # List of models to run
    models = ["gpt-4o", "sonnet"]

    # Run Aider with the API key for each model concurrently
    with ThreadPoolExecutor() as executor:
        futures = []
        for model in models:
            api_key = load_api_key(model)
            print(f"Loaded API Key for {model}: {api_key}")

            if api_key:
                if model == "gpt-4o":
                    futures.append(executor.submit(subprocess.run, ["aider", "--openai-api-key", api_key, "--model", model, "--browser"]))
                elif model == "sonnet":
                    futures.append(executor.submit(subprocess.run, ["aider", "--anthropic-api-key", api_key, "--model", model, "--browser"]))

        for future in futures:
            future.result()
