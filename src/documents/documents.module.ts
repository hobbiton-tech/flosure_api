import { Module } from '@nestjs/common';
import { DocumentsController } from './controllers/documents/documents.controller';
import { DocumentsService } from './services/documents/documents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DebitNote } from './entities/debit-note.entity';
import { DebitNoteRepository } from './repositories/debit-note.repository';
import { CreditNote } from './entities/credit-note.entity';
import { CreditNoteRepository } from './repositories/credit-note.repository';
import { CoverNote } from './entities/cover-note.entity';
import { CoverNoteRepository } from './repositories/cover-note.repository';
import { Policy } from 'src/policies/entities/policy.entity';
import { PolicyRepository } from 'src/policies/repositories/policy.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DebitNote,
      DebitNoteRepository,
      CreditNote,
      CreditNoteRepository,
      CoverNote,
      CoverNoteRepository,
      Policy,
      PolicyRepository,
    ]),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
