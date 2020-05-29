import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DocumentsService } from 'src/documents/services/documents/documents.service';
import { DebitNoteDto } from 'src/documents/dtos/debit-note.dto';
import { CreditNoteDto } from 'src/documents/dtos/credit-note.dto';
import { CoverNoteDto } from 'src/documents/dtos/cover-note.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentService: DocumentsService) {}

  //debit notes
  @Get('debit-notes')
  getAllDebitNotes() {
    return this.documentService.findAllDebitNotes();
  }

  @Post('debit-note/:id')
  createDebitNote(@Param('id') id: string, @Body() debitNoteDto: DebitNoteDto) {
    return this.documentService.createDebitNote(id, debitNoteDto);
  }

  @Get('debit-note/:id')
  getOneDebitNote(@Param('id') id: string) {
    return this.documentService.findOneDebitNote(id);
  }

  @Put('debit-note/:id')
  updateDebitNote(@Param('id') id: string, @Body() debitNoteDto: DebitNoteDto) {
    return this.documentService.updateDebitNote(id, debitNoteDto);
  }

  //credit notes
  @Get('credit-notes')
  getAllCreditNotes() {
    return this.documentService.findAllCreditNotes();
  }

  @Post('credit-note/:id')
  createCreditNote(
    @Param('id') id: string,
    @Body() creditNoteDto: CreditNoteDto,
  ) {
    return this.documentService.createCreditNote(id, creditNoteDto);
  }

  @Get('credit-note/:id')
  getOneCreditNote(@Param('id') id: string) {
    return this.documentService.findOneCreditNote(id);
  }

  @Put('credit-note/:id')
  updateCeditNote(
    @Param('id') id: string,
    @Body() creditNoteDto: CreditNoteDto,
  ) {
    return this.documentService.updateCreditNote(id, creditNoteDto);
  }

  //cover notes
  @Get('cover-notes')
  getAllCoverNotes() {
    return this.documentService.findAllCoverNotes();
  }

  @Post('cover-note/:id')
  createCoverNote(@Param('id') id: string, @Body() coverNoteDto: CoverNoteDto) {
    return this.documentService.createCoverNote(id, coverNoteDto);
  }

  @Get('cover-note/:id')
  getOneCoverNote(@Param('id') id: string) {
    return this.documentService.findOneCoverNote(id);
  }

  @Put('cover-note/:id')
  updateCoverNote(@Param('id') id: string, @Body() coverNoteDto: CoverNoteDto) {
    return this.documentService.updateCoverNote(id, coverNoteDto);
  }
}
