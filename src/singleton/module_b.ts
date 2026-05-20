import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Amaury', age: 40 });
myDatabaseClassic.add({ name: 'Bianca', age: 20 });
myDatabaseClassic.add({ name: 'Leonardo', age: 35 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
