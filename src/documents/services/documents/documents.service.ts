import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DebitNote } from 'src/documents/entities/debit-note.entity';
import { CoverNote } from 'src/documents/entities/cover-note.entity';
import { CreditNote } from 'src/documents/entities/credit-note.entity';
import { DebitNoteRepository } from 'src/documents/repositories/debit-note.repository';
import { CreditNoteRepository } from 'src/documents/repositories/credit-note.repository';
import { CoverNoteRepository } from 'src/documents/repositories/cover-note.repository';
import { DebitNoteDto } from 'src/documents/dtos/debit-note.dto';
import { Equal } from 'typeorm';
import { PolicyRepository } from 'src/policies/repositories/policy.repository';
import { CreditNoteDto } from 'src/documents/dtos/credit-note.dto';
import { CoverNoteDto } from 'src/documents/dtos/cover-note.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DebitNote)
    @InjectRepository(CreditNote)
    @InjectRepository(CoverNote)
    private readonly policyRepository: PolicyRepository,
    private readonly debitNoteRepository: DebitNoteRepository,
    private readonly creditNoteRepository: CreditNoteRepository,
    private readonly coverNoteRepository: CoverNoteRepository,
  ) {}

  //debit note
  findAllDebitNotes = async () => {
    return this.debitNoteRepository.find({
      relations: ['Policy'],
    });
  };

  createDebitNote = async (id: string, debitNoteDto: DebitNoteDto) => {
    const policyEntity = await this.policyRepository.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['debitNotes'],
    });

    if (!policyEntity) {
      throw new HttpException('Policy not found', HttpStatus.NOT_FOUND);
    }

    let debitNote = new DebitNote();
    debitNote.debitNoteNumber = debitNoteDto.debitNoteNumber;
    debitNote.dateCreated = debitNoteDto.dateCreated;
    debitNote.dateUpdated = debitNoteDto.dateUpdated;
    debitNote.remarks = debitNoteDto.remarks;

    await this.debitNoteRepository.save(debitNote);
    policyEntity.debitNotes.push(debitNote);
    await this.policyRepository.save(policyEntity);
  };

  findOneDebitNote = async (id: string) => {
    return this.debitNoteRepository.findOneOrFail(id, {
      relations: ['policy'],
    });
  };

  updateDebitNote = async (id: string, debitNoteDto: DebitNoteDto) => {
    return this.debitNoteRepository.save({ ...debitNoteDto, id: id });
  };

  //credit note
  findAllCreditNotes = async () => {
    return this.creditNoteRepository.find({
      relations: ['Policy'],
    });
  };

  createCreditNote = async (id: string, creditNoteDto: CreditNoteDto) => {
    const policyEntity = await this.policyRepository.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['creditNotes'],
    });

    if (!policyEntity) {
      throw new HttpException('Policy not found', HttpStatus.NOT_FOUND);
    }

    let creditNote = new CreditNote();
    creditNote.creditNoteNumber = creditNoteDto.creditNoteNumber;
    creditNote.dateCreated = creditNoteDto.dateCreated;
    creditNote.dateUpdated = creditNoteDto.dateUpdated;
    creditNote.remarks = creditNoteDto.remarks;

    await this.creditNoteRepository.save(creditNote);
    policyEntity.creditNotes.push(creditNote);
    await this.policyRepository.save(policyEntity);
  };

  findOneCreditNote = async (id: string) => {
    return this.creditNoteRepository.findOneOrFail(id, {
      relations: ['policy'],
    });
  };

  updateCreditNote = async (id: string, creditNoteDto: CreditNoteDto) => {
    return this.creditNoteRepository.save({ ...creditNoteDto, id: id });
  };

  //cover note
  findAllCoverNotes = async () => {
    return this.coverNoteRepository.find({
      relations: ['Policy'],
    });
  };

  createCoverNote = async (id: string, coverNoteDto: CoverNoteDto) => {
    const policyEntity = await this.policyRepository.findOne({
      where: {
        id: Equal(id),
      },
      relations: ['coverNotes'],
    });

    if (!policyEntity) {
      throw new HttpException('Policy not found', HttpStatus.NOT_FOUND);
    }

    let coverNote = new CoverNote();
    coverNote.certificateNumber = coverNoteDto.certificateNumber;
    coverNote.dateCreated = coverNoteDto.dateCreated;
    coverNote.dateUpdated = coverNoteDto.dateUpdated;

    await this.coverNoteRepository.save(coverNote);
    policyEntity.coverNotes.push(coverNote);
    await this.policyRepository.save(policyEntity);
  };

  findOneCoverNote = async (id: string) => {
    return this.coverNoteRepository.findOneOrFail(id, {
      relations: ['policy'],
    });
  };

  updateCoverNote = async (id: string, coverNoteDto: CoverNoteDto) => {
    return this.coverNoteRepository.save({ ...coverNoteDto, id: id });
  };
}
