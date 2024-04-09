import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-secretaria',
  standalone: true,
  imports: [],
  templateUrl: './secretaria.component.html',
  styleUrl: './secretaria.component.css'
})
export class SecretariaComponent {
  constructor(private storage: Storage, private router: Router  ){}
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
          window.alert(`${file.name} ha sido subido con edxito`)
        })
        .catch(error => {
          console.error('Error uploading file', error);
        });
    }
  }
  sendRoomName(){
    setTimeout(()=>{
      this.router.navigate(['/home'])
    }, 1000);
  }
}
