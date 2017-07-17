// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { TasksModule } from './tasks.module';

platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(TasksModule);