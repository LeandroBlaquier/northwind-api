import { PartialType } from '@nestjs/mapped-types';
import { suppliersdto } from './suppliers.dto';

export class ProductPatchDTO extends PartialType(suppliersdto) {}
