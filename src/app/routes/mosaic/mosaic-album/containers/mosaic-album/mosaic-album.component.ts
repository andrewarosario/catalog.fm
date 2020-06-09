import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PERIODS_LAST_FM, PeriodLastfm } from '@core/models/periods';
import { MosaicAlbumFacade } from '../../mosaic-album.facade';

let downloaded = 0;
const IMAGE_SIZE = 174;

@Component({
  selector: 'app-mosaic-album',
  templateUrl: './mosaic-album.component.html',
  styleUrls: ['./mosaic-album.component.scss']
})
export class MosaicAlbumComponent implements OnInit, AfterViewInit {

  public periods = PERIODS_LAST_FM;
  public sizes = [
    { value: 9, cols: 3, text: '3 x 3' },
    { value: 16, cols: 4, text: '4 x 4' },
    { value: 25, cols: 5, text: '5 x 5' },
    // { value: 100, cols: 10, text: '10 x 10' },
  ];

  @ViewChild('canvasElement') public canvasElement: ElementRef<HTMLCanvasElement>;
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(
    private formBuilder: FormBuilder,
    private facade: MosaicAlbumFacade
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({ period: ['', Validators.required] });
    this.secondFormGroup = this.formBuilder.group({ size: ['', Validators.required] });
  }

  ngAfterViewInit() {
    this.canvas = this.canvasElement.nativeElement;
    this.context = this.canvas.getContext('2d');
  }

  public generate() {
    downloaded = 0;
    this.initCanvas();
    this.callApi();
  }

  public initCanvas() {
    const canvasImg = document.getElementById('canvasImg');
    if (canvasImg) {
      canvasImg.remove();
    }
    this.canvas.width = IMAGE_SIZE * this.numCols;
    this.canvas.height = IMAGE_SIZE * this.numCols;
    this.context.fillStyle = 'black';

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

  }

  public callApi() {
    this.facade.getImageAlbums(this.size, this.period)
      .subscribe(links => this.makeMosaic(links));
  }

  private makeMosaic(links: string[]) {

    for (let colX = 0, posLink = 0; colX < this.numCols; colX++) {
      for (let colY = 0; colY < this.numCols; colY++, posLink++) {
          this.loadImage(links[posLink], colY, colX);
      }
    }
  }

  private loadImage(link: string, colX: number, colY: number) {
    const img = new Image(IMAGE_SIZE, IMAGE_SIZE);
    img.crossOrigin = 'Anonymous';
    img.classList.add('img-responsive');

    const registerDownloaded = () => {
      downloaded++;
      if (downloaded === this.size) {
        this.canvas.style.display = 'none';
        const canvasImg = new Image(IMAGE_SIZE * this.numCols, IMAGE_SIZE * this.numCols);
        canvasImg.src = this.canvas.toDataURL('image/png');
        canvasImg.classList.add('img-responsive');
        canvasImg.crossOrigin = 'Anonymous';
        canvasImg.style.margin = '10px auto;';
        canvasImg.id = 'canvasImg';
        document.getElementById('generated').append(canvasImg);
      }};

    img.onload = () => {
      this.context.drawImage(img, colX * IMAGE_SIZE, colY * IMAGE_SIZE);
      registerDownloaded();
    };
    img.src = link;
  }

  private get period(): PeriodLastfm {
    return this.firstFormGroup.get('period').value as PeriodLastfm;
  }

  private get size(): number {
    return +this.secondFormGroup.get('size').value;
  }

  private get numCols(): number {
    const size = this.size;
    return this.sizes.find(s => s.value === size).cols;
  }


}
