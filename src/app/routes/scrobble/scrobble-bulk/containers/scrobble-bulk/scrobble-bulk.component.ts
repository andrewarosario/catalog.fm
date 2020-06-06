import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrobbleBulkFacade } from '../../scrobble-bulk.facade';
import { ScrobbleResponseType } from '@core/models/scrobble-response-type';
import { finalize } from 'rxjs/operators';
import { MessageService } from '@shared/services/message.service';

@Component({
  selector: 'app-scrobble-bulk',
  templateUrl: './scrobble-bulk.component.html',
  styleUrls: ['./scrobble-bulk.component.scss']
})
export class ScrobbleBulkComponent implements OnInit {

  public scrobbleForm: FormGroup;
  public loadingRequest = false;

  constructor(
    public facade: ScrobbleBulkFacade,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.scrobbleForm = this.formBuilder.group({
      textScrobble: ['', Validators.required]
    });
  }

  scrobble() {
    this.loadingRequest = true;
    const textScrobble = this.scrobbleForm.get('textScrobble').value;

    this.facade.scrobble(textScrobble).pipe(finalize(() => this.loadingRequest = false))
    .subscribe(
      res => this.messageService.open(this.getResponseMessage(res)),
      err => this.messageService.open('Erro ao scrobblar as faixas!'),
    );
  }

  private getResponseMessage(response: ScrobbleResponseType): string {
    return response === ScrobbleResponseType.Lastfm
      ? `Faixas scrobbladas com sucesso!`
      : `As faixas foram armazenadas em cache`;
  }

}
