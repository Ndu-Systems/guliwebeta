import { ForgotPasswordEmailComponent } from './account/forgot-password/forgot-password-email/forgot-password-email.component';
import { ForgotPasswordComponent } from './account/forgot-password/forgot-password.component';
import { AdminChangePasswordComponent } from './dash-board/admin-dashboard/admin-change-password/admin-change-password.component';
import { MyProfileComponent } from './dash-board/user-dashboard/my-profile/my-profile.component';
import { AdminProfileComponent } from './dash-board/admin-dashboard/admin-profile/admin-profile.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';
import { ChangePasswordComponent } from './account/change-password/change-password.component';
import { DirectDepositComponent } from './payments/direct-deposit/direct-deposit.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { PayFastComponent } from './payments/pay-fast/pay-fast.component';
import { UserDashboardComponent } from './dash-board/user-dashboard/user-dashboard.component';
import { AdminNavComponent } from './dash-board/admin-dashboard/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './dash-board/admin-dashboard/admin-dashboard.component';
import { GetArticlesComponent } from './article/get-articles/get-articles.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TopPaidArticlesComponent } from './article/top-paid-articles/top-paid-articles.component';
import { UserLoginComponent } from './account/user-login/user-login.component';
import { UserRegistrationComponent } from './account/user-registration/user-registration.component';
import { UserLogoutComponent } from './account/user-logout/user-logout.component';
import { UserNavComponent } from './dash-board/user-dashboard/user-nav/user-nav.component';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { UnAuthorizedComponent } from './account/un-authorized/un-authorized.component';
import { UserChangePasswordComponent } from './dash-board/user-dashboard/user-change-password/user-change-password.component';

//Create routes here with components
const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "top-paid", component: TopPaidArticlesComponent },
    { path: "login", component: UserLoginComponent },
    { path: "logout", component: UserLogoutComponent },
    { path: "register", component: UserRegistrationComponent },
    { path: "admin-dashboard", component: AdminDashboardComponent },
    { path: "user-dashboard", component: UserDashboardComponent },
    { path: "direct-deposit-success", component: DirectDepositComponent },
    { path: "view-article/:ArticleId", component: ViewArticleComponent },
    { path: "un-authorized", component: UnAuthorizedComponent },
    { path: "publisher-profile", component: AdminProfileComponent },
    { path: "publisher-change-password", component: AdminChangePasswordComponent },
    { path: "user-change-password", component: UserChangePasswordComponent },
    { path: "my-profile", component: MyProfileComponent },
    { path: "forgot-password", component: ForgotPasswordEmailComponent },
    { path: "reset-password", component: ForgotPasswordComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "**", component: HomeComponent }
];

//Add Components here to export
export const routingComponents = [
    HomeComponent,
    HomeNavComponent,
    GetArticlesComponent,
    TopPaidArticlesComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserLogoutComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    UserDashboardComponent,
    UserNavComponent,
    ViewArticleComponent,
    PayFastComponent,
    CheckoutComponent,
    CartComponent,
    DirectDepositComponent,
    UnAuthorizedComponent,
    ChangePasswordComponent,
    UserProfileComponent,
    AdminProfileComponent,
    MyProfileComponent,
    AdminChangePasswordComponent,
    UserChangePasswordComponent,
    ForgotPasswordComponent,
    ForgotPasswordEmailComponent
];

//Compile into on Ngmodule
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

//Reference below in the app.module.ts
export class AppRoutingModule {
}