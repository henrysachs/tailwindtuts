import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgIconsModule } from '@ng-icons/core';
import { FeatherAirplay, FeatherActivity } from '@ng-icons/feather-icons';
import { BootstrapHash } from '@ng-icons/bootstrap-icons';

import { SidebarIconComponent } from './sidebar/sidebar-icon/sidebar-icon.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ChannelBarComponent } from './channel-bar/channel-bar.component';
import { ChannelGroupComponent } from './channel-bar/channel-group/channel-group.component';
import { HeroPlusSolid } from '@ng-icons/heroicons';
import { HeroChevronDown, HeroChevronRight } from '@ng-icons/heroicons';
import { HeroHashtag } from '@ng-icons/heroicons';
import { TopicComponent } from './channel-bar/channel-group/topic/topic.component';
import { HeroSun } from '@ng-icons/heroicons';
import { HeroMoon } from '@ng-icons/heroicons';
import { HeroSearch } from '@ng-icons/heroicons';
import { HeroBell } from '@ng-icons/heroicons';
import { HeroUserCircle } from '@ng-icons/heroicons';
import { MessageComponent } from './content-container/message/message.component';
import {
  HeroPlusCircleSolid,
  HeroHome,
  HeroCog,
  HeroStar,
  HeroCubeTransparent,
} from '@ng-icons/heroicons';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarIconComponent,
    TopNavigationComponent,
    ContentContainerComponent,
    ChannelBarComponent,
    ChannelGroupComponent,
    TopicComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgIconsModule.withIcons({
      FeatherAirplay,
      HeroPlusSolid,
      HeroChevronDown,
      HeroCubeTransparent,
      HeroChevronRight,
      HeroHashtag,
      BootstrapHash,
      HeroSearch,
      HeroBell,
      HeroUserCircle,
      HeroPlusCircleSolid,
      HeroHome,
      HeroCog,
      HeroSun,
      HeroStar,
      HeroMoon,
      FeatherActivity,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
