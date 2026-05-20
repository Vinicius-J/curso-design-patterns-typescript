import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Vinícius', age: 23 });
myDatabaseClassic.add({ name: 'Roberto', age: 50 });
myDatabaseClassic.add({ name: 'Maria', age: 32 });

export { myDatabaseClassic };
