import { Component } from '@angular/core';
import { DatabaseService } from 'src/services/database.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  songs = [];

  songs$: Observable<any[]>;

  constructor(
    private http: HttpClient,
    private dbService: DatabaseService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.songs$ = this.dbService.db.song // collection
      .find().$; // query

    this.http.get(environment.api + 'songs').subscribe(
      (songs: any) => {
        songs.map(song => {
          this.dbService.db.song.atomicUpsert({
            id: song._id,
            name: song.name,
            img: song.img,
          });
        });
      },
      async error => {
        const toast = await this.toastController.create({
          message: 'Não foi possível buscar novos dados',
          duration: 2000,
        });
        toast.present();
      }
    );
  }
}
