import { Injectable } from '@angular/core';

@Injectable()

export abstract class StorageService {    
    public abstract get(): Storage;
}

export class LocalStorageService extends StorageService{
  public get() : Storage{
    return localStorage;
  }
}
