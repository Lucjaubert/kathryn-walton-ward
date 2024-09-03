import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  setMetaTitle(title: string) {
    this.title.setTitle(title);
  }

  setMetaDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateMetaTag(name: string, content: string, attribute: string = 'name') {
    this.meta.updateTag({ [attribute]: name, content: content });
  }
}
