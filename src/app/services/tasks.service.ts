import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const apiUrl = environment.apiUrl + '/tasks';

@Injectable()
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}`, options)
    .toPromise();
}

  createNew(data) {
    const options = {
      withCredentials: true
    };
    const newData = {
      title: data.title,
      location: data.location,
      category: data.category,
      budget: data.budget,
      image:data.image
    }
    console.log(newData)
    return this.httpClient.post(`${apiUrl}`, newData, options)
    .toPromise();
  }

  ///////////////
  // createNew(data) {
  //   const options = {
  //     withCredentials: true
  //   };
  //   const newData = {
  //     title: data
  //   }
  //   console.log(newData)
  //   return this.httpClient.post(`${apiUrl}`, newData, options)
  //   .toPromise();

  // }
  //////////////

  getTaskByUser(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/user/${id}`, options)
    .toPromise();
  }
  
  getTask(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
    .toPromise();
  } 

  createNewBid(data, task) {
    const options = {
      withCredentials: true
    };
    const newData = {
      price: data,
    }
    const id = task._id;
    return this.httpClient.post(`${apiUrl}/${id}`, newData, options)
    .toPromise();
  }

  createNewMessage(formData, taskId, bidId) {
    const options = {
      withCredentials: true
    };
    const newData = {
      message: formData,
    }
    return this.httpClient.post(`${apiUrl}/${taskId}/bids/${bidId}`, newData, options)
    .toPromise();
  }

  onAceptTask(taskId, bidId) {
    const options = {
      withCredentials: true
    };
    const newData = {
      status: "Accepted",
    }
    return this.httpClient.post(`${apiUrl}/${taskId}/bids/${bidId}/accept`, newData,options)
    .toPromise();
  }

  // getBidOfTask(taskId, bidId) {
  //   const options = {
  //     withCredentials: true
  //   };
  //   return this.httpClient.get(`${apiUrl}/${taskId}/bids/${bidId}`, options)
  //   .toPromise();
  // }
}

