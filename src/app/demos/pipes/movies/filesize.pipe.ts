import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filesize",
    standalone: true
})
export class FileSizePipe implements PipeTransform{

    transform(sizeString: string) {
        let size = Number(sizeString);
        let calculateSize = (size / (1024*1024))
        let extension = ' MB'

        if(calculateSize > 1024){
            calculateSize = (calculateSize/1024)
            extension = ' GB'
        }
        return calculateSize.toFixed(2) + extension;
    }

}