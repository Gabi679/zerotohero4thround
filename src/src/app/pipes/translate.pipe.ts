import { TranslationService } from '../services/translation.service';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * pipe definition
 */
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
    /**
     * @ignore
     */
    constructor(private translationService: TranslationService) {}
/**
 * 
 * @param value what should your translate
 * @param args extra arguments
 */
  transform(value: any, args?: any): any {
     return this.translationService.translate(value);
  }

}