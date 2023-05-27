import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements AfterViewInit {
    constructor() {}
    ngAfterViewInit(): void {
        const SELECTORS = {
            section: '[data-section]',
            scrollTo: '[data-scroll-to]',
            scrollDir: '[data-scroll-dir]',
        };
        const sectionsArray = Array.from(
            document.querySelectorAll(SELECTORS.section)
        );
        const scrollToElements = document.querySelectorAll(SELECTORS.scrollTo);
        const scrollDirElements = document.querySelectorAll(
            SELECTORS.scrollDir
        );

        let currentSectionIndex = 0;

        const getScrollTarget = (dir: string) => {
            if (dir === 'prev' && currentSectionIndex > 0) {
                currentSectionIndex--;
                return sectionsArray[currentSectionIndex];
            }
            if (
                dir === 'next' &&
                currentSectionIndex < sectionsArray.length - 1
            ) {
                currentSectionIndex++;
                return sectionsArray[currentSectionIndex];
            }
            return false;
        };

        scrollDirElements.forEach((el: Element) => {
            el.addEventListener('click', () => {
                const direction = (el as HTMLElement).dataset['scrollDir'];
                const target = direction ? getScrollTarget(direction) : false;

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        scrollToElements.forEach((el: Element) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = el.getAttribute('href');
                const target = targetId
                    ? document.querySelector(targetId)
                    : null;

                if (target) {
                    sectionsArray.forEach((section, index) => {
                        if (section.id === targetId?.replace('#', '')) {
                            currentSectionIndex = index;
                        }
                    });
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}
