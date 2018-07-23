import { Injectable } from '@angular/core';
/**
 * define the service
 */
@Injectable()
/**
 * define the service
 */
export class LoginService {
/**
 * store the actual user
 */
  actualUser:string;
    /**
     * @ignore
     */
  constructor() { }
  /**
   * 
   * @param user set the paramter to the actual user
   */
  changeUser(user: string) {
    this.actualUser=user;
  }
  /**
   * give back the actual user
   * @return return the actual user
   */
  getActualUser(){
    return this.actualUser;
  }

}