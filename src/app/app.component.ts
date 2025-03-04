import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private storage: Storage){}
  uploadManual($event: any){
    const files = $event.target.files;
    console.log(files);
    /*const manualRef = ref(this.storage, `secretary/${file.name}`)
    uploadBytes(manualRef, file)
    .then(res => console.log(res)
    ).catch((error) => console.log(error)) */
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const manualRef = ref(this.storage, `secretary/manual/${file.name}`);
      uploadBytes(manualRef, file)
        .then(snapshot => {
          console.log('Uploaded a blob or file!', snapshot);
        })
        .catch(error => {
          console.error('Error uploading file', error);
        });
    }
  }
}
