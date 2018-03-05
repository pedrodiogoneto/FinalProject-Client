import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {

  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/tasks`, options)
    .toPromise();
}

  createNew(data) {
    const options = {
      withCredentials: true
    };
    const newData = {
      title: data
    }
    console.log(newData)
    return this.httpClient.post(`${this.API_URL}/tasks`, newData, options)
    .toPromise();

  }

  getTaskByUser(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/tasks/user/${id}`, options)
    .toPromise();
  }
  
  getTask(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/tasks/${id}`, options)
    .toPromise();
  } 

  createNewBid(data, task) {
    const options = {
      withCredentials: true
    };
    const newData = {
      price: data
    }
    const id = task._id;
    return this.httpClient.post(`${this.API_URL}/tasks/${id}`, newData, options)
    .toPromise();
  }
}

