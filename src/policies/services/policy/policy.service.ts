import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PolicyDto } from '../../dtos/policy.dto';
import { Policy } from '../../entities/policy.entity';
import {
  PolicyRepository,
  PolicyBackUpRepository,
} from '../../repositories/policy.repository';
import { Risk } from 'src/risks/entities/risk.entity';
import { RiskRepository } from 'src/risks/repositories/risk.repository';
import { RiskDto } from 'src/risks/dtos/risk.dto';
import { Load } from 'src/risks/entities/load.entity';
import { Discount } from 'src/risks/entities/discount.entity';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private readonly policyRepository: PolicyRepository,
    private readonly policyBackUpRepository: PolicyBackUpRepository,
    private readonly riskRepository: RiskRepository,
  ) {}

  findAll = async () => {
    return this.policyRepository.find({
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  createPolicy = async (policyDto: PolicyDto) => {
    const policy = new Policy();
    // const risk = new Risk();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    policy.branch = policyDto.branch;
    policy.client = policyDto.client;
    policy.clientCode = policyDto.clientCode;
    policy.currency = policyDto.currency;
    policy.dateOfIssue = policyDto.dateOfIssue;
    policy.endDate = policyDto.endDate;
    policy.expiryDate = policyDto.expiryDate;
    policy.insuranceCompany = policyDto.insuranceCompany;
    policy.nameOfInsured = policyDto.nameOfInsured;
    policy.netPremium = policyDto.netPremium;
    policy.paymentPlan = policyDto.paymentPlan;
    policy.policyNumber = policyDto.policyNumber;
    policy.preparedBy = policyDto.preparedBy;
    policy.product = policyDto.product;
    policy.productType = policyDto.productType;
    policy.quarter = policyDto.quarter;
    policy.receiptStatus = policyDto.receiptStatus;
    policy.startDate = policyDto.startDate;
    policy.status = policyDto.status;
    policy.timeOfIssue = policyDto.timeOfIssue;
    policy.town = policyDto.town;
    policy.underwritingYear = policyDto.underwritingYear;
    policy.user = policyDto.user;

    for (let risk of policyDto.risks) {
      for (let load of risk.loads) {
        loads.push(load);
      }

      for (let discount of risk.discounts) {
        discounts.push(discount);
      }

      risks.push(risk);
    }

    policy.risks = risks;

    await this.policyRepository.save(policy);
  };

  findOnePolicy = async (id: string) => {
    return this.policyRepository.findOneOrFail(id, {
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  updatePolicy = async (id: string, policyDto: PolicyDto) => {
    const policy = new Policy();
    // const risk = new Risk();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    policy.branch = policyDto.branch;
    policy.client = policyDto.client;
    policy.clientCode = policyDto.clientCode;
    policy.currency = policyDto.currency;
    policy.dateOfIssue = policyDto.dateOfIssue;
    policy.endDate = policyDto.endDate;
    policy.expiryDate = policyDto.expiryDate;
    policy.insuranceCompany = policyDto.insuranceCompany;
    policy.nameOfInsured = policyDto.nameOfInsured;
    policy.netPremium = policyDto.netPremium;
    policy.paymentPlan = policyDto.paymentPlan;
    policy.policyNumber = policyDto.policyNumber;
    policy.preparedBy = policyDto.preparedBy;
    policy.product = policyDto.product;
    policy.productType = policyDto.productType;
    policy.quarter = policyDto.quarter;
    policy.receiptStatus = policyDto.receiptStatus;
    policy.startDate = policyDto.startDate;
    policy.status = policyDto.status;
    policy.timeOfIssue = policyDto.timeOfIssue;
    policy.town = policyDto.town;
    policy.underwritingYear = policyDto.underwritingYear;
    policy.user = policyDto.user;

    for (let risk of policyDto.risks) {
      for (let discount of risk.discounts) {
        discounts.push(discount);
      }
      for (let load of risk.loads) {
        loads.push(load);
      }

      

      risks.push(risk);
    }

    policy.risks = risks;

    return this.policyRepository.save({ ...policy, id: id });
  };

  //backups
  findAllPolicyBackUps = async () => {
    return this.policyBackUpRepository.find({
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  createPolicyBackUp = async (policyDto: PolicyDto) => {
    const policy = new Policy();
    // const risk = new Risk();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    policy.branch = policyDto.branch;
    policy.client = policyDto.client;
    policy.clientCode = policyDto.clientCode;
    policy.currency = policyDto.currency;
    policy.dateOfIssue = policyDto.dateOfIssue;
    policy.endDate = policyDto.endDate;
    policy.expiryDate = policyDto.expiryDate;
    policy.insuranceCompany = policyDto.insuranceCompany;
    policy.nameOfInsured = policyDto.nameOfInsured;
    policy.netPremium = policyDto.netPremium;
    policy.paymentPlan = policyDto.paymentPlan;
    policy.policyNumber = policyDto.policyNumber;
    policy.preparedBy = policyDto.preparedBy;
    policy.product = policyDto.product;
    policy.productType = policyDto.productType;
    policy.quarter = policyDto.quarter;
    policy.receiptStatus = policyDto.receiptStatus;
    policy.startDate = policyDto.startDate;
    policy.status = policyDto.status;
    policy.timeOfIssue = policyDto.timeOfIssue;
    policy.town = policyDto.town;
    policy.underwritingYear = policyDto.underwritingYear;
    policy.user = policyDto.user;

    for (let risk of policyDto.risks) {
      for (let load of risk.loads) {
        loads.push(load);
      }

      for (let discount of risk.discounts) {
        discounts.push(discount);
      }

      risks.push(risk);
    }

    policy.risks = risks;
    await this.policyBackUpRepository.save(policy);
  };

  findOnePolicyBackUp = async (id: string) => {
    return this.policyBackUpRepository.findOneOrFail(id, {
      relations: ['risks', 'risks.loads', 'risks.discounts'],
    });
  };

  updatePolicyBackup = async (id: string, policyDto: PolicyDto) => {
    const policy = new Policy();
    // const risk = new Risk();
    const risks = new Array<Risk>();
    const loads = new Array<Load>();
    const discounts = new Array<Discount>();

    policy.branch = policyDto.branch;
    policy.client = policyDto.client;
    policy.clientCode = policyDto.clientCode;
    policy.currency = policyDto.currency;
    policy.dateOfIssue = policyDto.dateOfIssue;
    policy.endDate = policyDto.endDate;
    policy.expiryDate = policyDto.expiryDate;
    policy.insuranceCompany = policyDto.insuranceCompany;
    policy.nameOfInsured = policyDto.nameOfInsured;
    policy.netPremium = policyDto.netPremium;
    policy.paymentPlan = policyDto.paymentPlan;
    policy.policyNumber = policyDto.policyNumber;
    policy.preparedBy = policyDto.preparedBy;
    policy.product = policyDto.product;
    policy.productType = policyDto.productType;
    policy.quarter = policyDto.quarter;
    policy.receiptStatus = policyDto.receiptStatus;
    policy.startDate = policyDto.startDate;
    policy.status = policyDto.status;
    policy.timeOfIssue = policyDto.timeOfIssue;
    policy.town = policyDto.town;
    policy.underwritingYear = policyDto.underwritingYear;
    policy.user = policyDto.user;

    for (let risk of policyDto.risks) {
      for (let load of risk.loads) {
        loads.push(load);
      }

      for (let discount of risk.discounts) {
        discounts.push(discount);
      }

      risks.push(risk);
    }

    policy.risks = risks;

    return this.policyBackUpRepository.save({ ...policy, id: id });
  };
}
