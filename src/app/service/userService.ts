import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/userDto';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient) {

  }

  baseUrl = 'http://localhost:8081/';

  public createUser(user: User) {
    return this.httpClient.post(this.baseUrl + 'user', user);
  }

  // public getUsers(page: number, size: number, mc: string) {
  //   return this.httpClient.get(this.baseUrl +'chercherUsers?page=' + page + '&size=' + size + '&mc=' + mc);
  // }

  public getUserInfo(id: number) {
    return this.httpClient.get(this.baseUrl + 'users/' + id);
  }

  public getAllUser() {
    return this.httpClient.get(this.baseUrl + 'users');
  }

  public editUser(user: User, id: number) {
    return this.httpClient.put(this.baseUrl + 'user/' + id, user);
  }

  public removeUser(id: number) {
    return this.httpClient.delete(this.baseUrl + 'user/' + id);
  }

}
