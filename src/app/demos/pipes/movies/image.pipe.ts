import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "imageformater",
    standalone: true
})
export class ImageFormaterPipe implements PipeTransform {

    transform(image: string, changeImage: boolean,pathDir: string = "default") {
        if(pathDir == 'default') pathDir = 'assets';

        if(image.length === 0 && changeImage) image= 'semCapa.jpg'

        return '/'+pathDir+'/'+image
    }
}