import { Injectable } from '@angular/core';
import RxDB from 'rxdb/plugins/core';
import collections from '../database/collections';

import RxDBValidateModule from 'rxdb/plugins/validate';
RxDB.plugin(RxDBValidateModule);

import * as PouchdbAdapterIdb from 'pouchdb-adapter-idb';
RxDB.plugin(PouchdbAdapterIdb);
const useAdapter = 'idb';

/**
 * creates the database
 */
async function _create(): Promise<any> {
  console.log('DatabaseService: creating database..');
  const db = await RxDB.create<any>({
    name: 'pocdb',
    adapter: useAdapter,
    queryChangeDetection: true,
  });
  console.log('DatabaseService: created database');
  // (window as any)["db"] = db; // write to window for debugging

  // create collections
  console.log('DatabaseService: create collections');
  await Promise.all(collections.map(colData => db.collection(colData)));

  return db;
}

let DB_INSTANCE;

/**
 * This is run via APP_INITIALIZER in app.module.ts
 * to ensure the database exists before the angular-app starts up
 */
export async function initDatabase() {
  console.log('initDatabase()');
  DB_INSTANCE = await _create();
}

@Injectable()
export class DatabaseService {
  get db(): any {
    return DB_INSTANCE;
  }
}
