import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  label: string;
  icon: string;
  path?: string;
  href?: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
    ngOnInit(): void {
      // No initialization required
    }
  @Output() readonly navigate = new EventEmitter<void>();

  readonly mainLinks: NavItem[] = [
    { label: 'Pessoas', icon: 'group', path: '/persons' },
  ];


  // ...existing code...

  onNavigate(): void {
    this.navigate.emit();
  }
}
