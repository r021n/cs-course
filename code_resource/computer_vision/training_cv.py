import roboflow
from ultralytics import YOLO

def download_custom_dataset():
    """
    Mengunduh dataset kacamata dari Roboflow.
    """
    print("\nMenyiapkan dan mengunduh dataset kustom...")

    roboflow.login()

    rf = roboflow.Roboflow()

    # ganti 3 baris kode di bawah dengan kode dataset kamu
    # ================================================================
    project = rf.workspace("orbit-future-academy-o5orz").project("handsign-un1te-lpick")
    version = project.version(1)
    dataset = version.download("yolov8")
    # ================================================================

    print("Pengunduhan dataset selesai. Lokasi dataset:", dataset.location)
    return dataset.location

def train_custom_model(dataset_location):
    """
    Melatih model YOLOv8s.pt dengan dataset kustom.
    """

    print("\nMemulai pelatihan model kustom...")

    model_custom = YOLO('yolov8s.pt')
    model_custom.train(data=f'{dataset_location}/data.yaml', epochs=5, imgsz=640)

    print("Pelatihan model kustom selesai.")
    return 'runs/detect/train/weights/best.pt'

def run_custom_model(best_model_path):
    """
    Menggunakan model kustom yang sudah dilatih
    untuk mendeteksi objek pada gambar baru.
    """

    print("\nMemulai pengujian model kustom...")
    
    model_best = YOLO(best_model_path)

    source_image_path = input('Masukkan path gambarmu: ')
    results = model_best.predict(source=source_image_path, conf=0.25)
    for r in results:
        print(r.tojson())
    
    print("Pengujian model kustom selesai.")

if __name__ == "__main__":
    dataset_location = download_custom_dataset()

    best_model_path = train_custom_model(dataset_location)
    run_custom_model(best_model_path)