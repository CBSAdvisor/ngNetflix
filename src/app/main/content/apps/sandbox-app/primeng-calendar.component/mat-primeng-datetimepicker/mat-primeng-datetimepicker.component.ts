import {
    Component, ElementRef, forwardRef, HostBinding, Input, OnDestroy, Optional, Self,
    ViewEncapsulation
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'fuse-mat-datetimepicker',
    templateUrl: './mat-primeng-datetimepicker.component.html',
    styleUrls: ['./mat-primeng-datetimepicker.component.scss'],
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: MatPrimeNgDateTimePickerComponent
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MatPrimeNgDateTimePickerComponent),
            multi: true
        }
    ]
})
export class MatPrimeNgDateTimePickerComponent implements MatFormFieldControl<Date>, ControlValueAccessor, OnDestroy
{
    static nextId = 0;
    public datetime: FormControl;

    stateChanges = new Subject<void>();
    focused = false;
    ngControl: NgControl | null;
    errorState = false;
    controlType = 'fuse-mat-datetimepicker';

    get empty()
    {
        return !this.datetime.value;
    }

    @HostBinding('class.floating')
    get shouldPlaceholderFloat()
    {
        return this.focused || !this.empty;
    }

    @HostBinding() id = `${this.controlType}-${MatPrimeNgDateTimePickerComponent.nextId++}`;
    @HostBinding('attr.aria-describedby') describedBy = '';

    @Input()
    get placeholder()
    {
        return this._placeholder;
    }

    set placeholder(plh)
    {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    private _placeholder: string;

    @Input()
    get required()
    {
        return this._required;
    }

    set required(req)
    {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }

    private _required = false;

    @Input()
    get disabled()
    {
        return this._disabled;
    }

    set disabled(dis)
    {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }

    private _disabled = false;

    @Input()
    get value(): Date | null
    {
        return new Date(this.datetime.value);
    }

    set value(dt: Date | null)
    {
        dt = dt || new Date();
        // this.datetime.setValue(new Date(dt));
        this.writeValue(dt);
        this.stateChanges.next();
    }

    private subs: Subscription[] = [];

    constructor(private readonly fm: FocusMonitor,
                private readonly elRef: ElementRef)
    {
        this.datetime = new FormControl({
            value: new Date(2015, 6, 4, 18, 27)
        });

        this.subs.push(this.fm.monitor(elRef.nativeElement, true)
            .subscribe((origin) =>
            {
                this.focused = !!origin;
                this.stateChanges.next();
            }));

        this.subs.push(this.datetime.valueChanges
            .subscribe((val: Date) => {
                this.propagateChange(val);
            }));
    }

    ngOnDestroy(): void
    {
        this.stateChanges.complete();
        this.subs.forEach(s => s.unsubscribe());
        this.fm.stopMonitoring(this.elRef.nativeElement);
    }

    setDescribedByIds(ids: string[]): void
    {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent): void
    {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    }

    /* ControlValueAccessor */
    public writeValue(obj: any): void
    {
        if (obj && obj !== '') {
            this.datetime.setValue(new Date(obj));
        }
    }

    private propagateChange = (_: any) => { };

    public registerOnChange(fn: any): void
    {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void
    {
        return;
    }

    public setDisabledState?(isDisabled: boolean): void
    {
        this.disabled = isDisabled;
    }
}
