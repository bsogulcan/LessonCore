import { DetailHomeworkComponent } from './Domain/Homework/detail-homework/detail-homework/detail-homework.component';
import { HomeworkComponent } from './Domain/Homework/homework/homework.component';
import { LessonComponent } from './Domain/Lessons/lesson/lesson.component';
import { ClassroomComponent } from '@app/Domain/ClassRoom/classroom.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent, canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent },
                    { path: 'update-password', component: ChangePasswordComponent },
                    { path: 'classrooms', component: ClassroomComponent },
                    { path: 'lessons', component: LessonComponent },
                    {path:'homeworks',component:HomeworkComponent},
                    {path:'homework/:id',component:DetailHomeworkComponent}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
