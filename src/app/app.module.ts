import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './Components/Admin/admin-sidebar/admin-sidebar.component';
import { WelcomePageComponent } from './Components/Admin/welcome-page/welcome-page.component';
import {MatListModule} from '@angular/material/list';
import { AdminProfileComponent } from './Components/Admin/admin-profile/admin-profile.component';
import { AllCategoryComponent } from './Components/Admin/all-category/all-category.component';
import { AddCategoryComponent } from './Components/Admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './Components/Admin/update-category/update-category.component';
import { AllQuizesComponent } from './Components/Admin/all-quizes/all-quizes.component';
import { AddQuizComponent } from './Components/Admin/add-quiz/add-quiz.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewQuistionsComponent } from './Components/Admin/view-quistions/view-quistions.component';
import { AddQuestionsComponent } from './Components/Admin/add-questions/add-questions.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthInterceptor } from './service/interceptorservice/interceptor/auth.interceptor';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './Components/user/user-sidebar/user-sidebar.component';
import { UserWellcomePageComponent } from './Components/user/user-wellcome-page/user-wellcome-page.component';
import { UserProfileComponent } from './Components/user/user-profile/user-profile.component';
import { UpdateQuizComponent } from './Components/Admin/update-quiz/update-quiz.component';
import { UpdateQuestionComponent } from './Components/Admin/update-question/update-question.component';
import { LoadQuizesComponent } from './Components/user/load-quizes/load-quizes.component';
import { InstructionComponent } from './Components/user/instruction/instruction.component';
import { StartExamComponent } from './Components/user/start-exam/start-exam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    WelcomePageComponent,
    AdminProfileComponent,
    AllCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AllQuizesComponent,
    AddQuizComponent,
    ViewQuistionsComponent,
    AddQuestionsComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    UserWellcomePageComponent,
    UserProfileComponent,
    UpdateQuizComponent,
    UpdateQuestionComponent,
    LoadQuizesComponent,
    InstructionComponent,
    StartExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
