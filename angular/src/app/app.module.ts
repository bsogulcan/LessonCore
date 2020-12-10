import { DetailHomeworkComponent } from './Domain/Homework/detail-homework/detail-homework/detail-homework.component';
import { SafePipe } from './Domain/Helper/SafePipe';
import { EditHomeworkDialogComponent } from './Domain/Homework/edit-homework/edit-homework/edit-homework.component';
import { CreateHomeworkDialogComponent } from './Domain/Homework/create-homework/create-homework/create-homework.component';
import { HomeworkComponent } from './Domain/Homework/homework/homework.component';
import { EditLessonComponent } from './Domain/Lessons/edit-lesson/edit-lesson/edit-lesson.component';
import { LessonServiceModule } from './services/lesson-service.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
import {MatInputModule} from '@angular/material/input';
import { DevextremeComponentModule } from './devextreme-component.module';
import { DxDropDownButtonModule } from 'devextreme-angular';
import {MatButtonModule} from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditClassroomDialogComponent } from './Domain/ClassRoom/edit-classroom/edit-classroom/edit-classroom.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
// ClassRooms
import {ClassroomComponent} from '@app/Domain/ClassRoom/classroom.component';
import {CreateClassRoomDialogComponent} from '@app/Domain/ClassRoom/create-classroom/create-classroom/create-classroom.component';

// Lessons
import {LessonComponent} from '@app/Domain/Lessons/lesson/lesson.component'
import { CreateLessonDialogComponent } from './Domain/Lessons/create-lesson/create-lesson/create-lesson.component';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,
    ClassroomComponent,
    CreateClassRoomDialogComponent,
    EditClassroomDialogComponent,
    LessonComponent,
    CreateLessonDialogComponent,
    EditLessonComponent,
    HomeworkComponent,
    CreateHomeworkDialogComponent,
    EditHomeworkDialogComponent,
    DetailHomeworkComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    DevextremeComponentModule,
    MatIconModule,
    MatMenuModule,
    DxDropDownButtonModule,
    MatTabsModule,
    LessonServiceModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
    //Domain
    ClassroomComponent,
    LessonComponent,
    HomeworkComponent
  ],
})
export class AppModule {}
