import { Injectable } from '@angular/core';
/**
 * define the service
 */
@Injectable()
export class TranslationService {
    /**
     * store the available languages
     */
    public languages = ['hun', 'eng'];
    /**
     * actual language
     */
    public language = 'hun';
    /**
     * store the words.
     */
    private dictionary: {[key: string]: TranslationSet} = {
        'hun' : {
            languange: 'hun',
            values: {
                'username' : 'Felhasználónév',
                'please login': 'Kérjük jelentkezzen be',
                'login': 'Bejelentkezés',
                'own questions': 'Saját Kérdéseim',
                'new questions': 'Friss Kérdések',
                'questions': 'Kérdések',
                'new': 'Új kérdés',
                'logout': 'Kijelentkezés',
                'short': 'Kérdés címe',
                'long': 'Kérdés részletezése',
                'private': 'Privát kérdés',
                'add': 'Hozzáadás',
                'cancel': 'Mégse',
                'send': 'Küldés',
                'new answer': 'Új válasz beküldése',
                'change': 'Magyar'
            }
        },
        'eng' : {
            languange: 'eng',
            values: {
                'username' : 'Username',
                'please login': 'Please log in',
                'login': 'Login',
                'own questions': 'My Questions',
                'new questions': 'New Questions',
                'questions': 'Questions',
                'new': 'New Question',
                'logout': 'Logout',
                'short': 'Question title',
                'long': 'Question content',
                'private': 'Privát Question',
                'add': 'Add',
                'cancel': 'Cancel',
                'send': 'Send',
                'new answer': 'Send new answer',
                'change': 'English'
            }
        }
    };
    /**
     * @ignore
     */
    constructor() { }
    /**
     * 
     * @param value translate the value to the actual language
     */
  translate(value: string): string {
          if ( this.dictionary[this.language] != null) {
              return this.dictionary[this.language].values[value];
          }
      }
}

/**
 * typedef
 */
export class TranslationSet {
   public languange: string;
   public values: {[key: string]: string} = {};
}