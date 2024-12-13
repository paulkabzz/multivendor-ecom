from google.cloud import vision
import io

def analyze_image(image_path):
    client = vision.ImageAnnotatorClient()

    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)
    response = client.safe_search_detection(image=image)
    annotations = response.safe_search_annotation

    # Simple analysis example
    if annotations.adult >= vision.Likelihood.POSSIBLE:
        return "Rejected due to adult content"
    else:
        return "Accepted"

# Example usage
result = analyze_image('../../uploads/')
print(result)

