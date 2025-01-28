import { SsoProviderName, SsoProviderType } from '@logto/schemas';

import { SamlSsoConnector } from '../SamlSsoConnector/index.js';
import { type SingleSignOnFactory } from '../index.js';
import { samlConnectorConfigGuard } from '../types/saml.js';

export class AzureAdSsoConnector extends SamlSsoConnector {}

export const azureAdSsoConnectorFactory: SingleSignOnFactory<SsoProviderName.AZURE_AD> = {
  providerName: SsoProviderName.AZURE_AD,
  providerType: SsoProviderType.SAML,
  logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDY5MzQgMTguNzA5N0M1LjU4NjY3IDE5LjAzMjMgNi40NDY2NyAxOS4zOTEgNy4zNTYgMTkuMzkxQzguMTg0IDE5LjM5MSA4Ljk1MzM0IDE5LjE1MSA5LjU5MDY3IDE4Ljc0MTdDOS41OTA2NyAxOC43NDE3IDkuNTkyIDE4Ljc0MTcgOS41OTMzNCAxOC43NDAzTDEyIDE3LjIzNjNWMjIuNjY3QzExLjYxODcgMjIuNjY3IDExLjIzNDcgMjIuNTYzIDEwLjkwMTMgMjIuMzU1TDUuMDY5MzQgMTguNzA5N1oiIGZpbGw9IiMyMjUwODYiLz4KPHBhdGggZD0iTTEwLjQ3MDcgMi4wMDkwMUwwLjQ3MDY2MiAxMy4yODlDLTAuMzAxMzM4IDE0LjE2MSAtMC4xMDAwMDUgMTUuNDc4MyAwLjkwMTMyOCAxNi4xMDM3QzAuOTAxMzI4IDE2LjEwMzcgNC42MDI2NiAxOC40MTcgNS4wNjkzMyAxOC43MDlDNS41ODY2NiAxOS4wMzE3IDYuNDQ2NjYgMTkuMzkwMyA3LjM1NTk5IDE5LjM5MDNDOC4xODM5OSAxOS4zOTAzIDguOTUzMzMgMTkuMTUwMyA5LjU5MDY2IDE4Ljc0MUM5LjU5MDY2IDE4Ljc0MSA5LjU5MTk5IDE4Ljc0MSA5LjU5MzMzIDE4LjczOTdMMTIgMTcuMjM1N0w2LjE4MTMzIDEzLjU5ODNMMTIuMDAxMyA3LjAzMzAxVjEuMzMzMDFDMTEuNDM2IDEuMzMzMDEgMTAuODcwNyAxLjU1ODM0IDEwLjQ3MDcgMi4wMDkwMVoiIGZpbGw9IiM2NkRERkYiLz4KPHBhdGggZD0iTTYuMTgxMjcgMTMuNTk5NUw2LjI1MDYxIDEzLjY0MjJMMTEuOTk5OSAxNy4yMzY4SDEyLjAwMTNWNy4wMzU1MUwxMS45OTk5IDcuMDM0MThMNi4xODEyNyAxMy41OTk1WiIgZmlsbD0iI0NCRjhGRiIvPgo8cGF0aCBkPSJNMjMuMDk4NyAxNi4xMDRDMjQuMSAxNS40Nzg3IDI0LjMwMTMgMTQuMTYxMyAyMy41MjkzIDEzLjI4OTNMMTYuOTY4IDUuODg4QzE2LjQzODcgNS42NDEzMyAxNS44NDUzIDUuNSAxNS4yMTczIDUuNUMxMy45ODQgNS41IDEyLjg4MTMgNi4wMzIgMTIuMTQ4IDYuODY4TDEyLjAwMjcgNy4wMzJMMTcuODIxMyAxMy41OTczTDEyLjAwMTMgMTcuMjM0N1YyMi42NjUzQzEyLjM4NCAyMi42NjUzIDEyLjc2NTMgMjIuNTYxMyAxMy4wOTg3IDIyLjM1MzNMMjMuMDk4NyAxNi4xMDI3VjE2LjEwNFoiIGZpbGw9IiMwNzQ3OTMiLz4KPHBhdGggZD0iTTEyLjAwMTMgMS4zMzMwMVY3LjAzMzAxTDEyLjE0NjcgNi44NjkwMUMxMi44OCA2LjAzMzAxIDEzLjk4MjcgNS41MDEwMSAxNS4yMTYgNS41MDEwMUMxNS44NDUzIDUuNTAxMDEgMTYuNDM3MyA1LjY0MzY3IDE2Ljk2NjcgNS44ODkwMUwxMy41MjggMi4wMTAzNEMxMy4xMjkzIDEuNTU5NjcgMTIuNTY0IDEuMzM0MzQgMTIgMS4zMzQzNEwxMi4wMDEzIDEuMzMzMDFaIiBmaWxsPSIjMDI5NEU0Ii8+CjxwYXRoIGQ9Ik0xNy44MiAxMy41OTkyTDEyLjAwMTMgNy4wMzUxNlYxNy4yMzUyTDE3LjgyIDEzLjU5OTJaIiBmaWxsPSIjOTZCQ0MyIi8+Cjwvc3ZnPgo=',
  logoDark:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDY5MzQgMTguNzA5N0M1LjU4NjY3IDE5LjAzMjMgNi40NDY2NyAxOS4zOTEgNy4zNTYgMTkuMzkxQzguMTg0IDE5LjM5MSA4Ljk1MzM0IDE5LjE1MSA5LjU5MDY3IDE4Ljc0MTdDOS41OTA2NyAxOC43NDE3IDkuNTkyIDE4Ljc0MTcgOS41OTMzNCAxOC43NDAzTDEyIDE3LjIzNjNWMjIuNjY3QzExLjYxODcgMjIuNjY3IDExLjIzNDcgMjIuNTYzIDEwLjkwMTMgMjIuMzU1TDUuMDY5MzQgMTguNzA5N1oiIGZpbGw9IiMyMjUwODYiLz4KPHBhdGggZD0iTTEwLjQ3MDcgMi4wMDkwMUwwLjQ3MDY2MiAxMy4yODlDLTAuMzAxMzM4IDE0LjE2MSAtMC4xMDAwMDUgMTUuNDc4MyAwLjkwMTMyOCAxNi4xMDM3QzAuOTAxMzI4IDE2LjEwMzcgNC42MDI2NiAxOC40MTcgNS4wNjkzMyAxOC43MDlDNS41ODY2NiAxOS4wMzE3IDYuNDQ2NjYgMTkuMzkwMyA3LjM1NTk5IDE5LjM5MDNDOC4xODM5OSAxOS4zOTAzIDguOTUzMzMgMTkuMTUwMyA5LjU5MDY2IDE4Ljc0MUM5LjU5MDY2IDE4Ljc0MSA5LjU5MTk5IDE4Ljc0MSA5LjU5MzMzIDE4LjczOTdMMTIgMTcuMjM1N0w2LjE4MTMzIDEzLjU5ODNMMTIuMDAxMyA3LjAzMzAxVjEuMzMzMDFDMTEuNDM2IDEuMzMzMDEgMTAuODcwNyAxLjU1ODM0IDEwLjQ3MDcgMi4wMDkwMVoiIGZpbGw9IiM2NkRERkYiLz4KPHBhdGggZD0iTTYuMTgxMjcgMTMuNTk5NUw2LjI1MDYxIDEzLjY0MjJMMTEuOTk5OSAxNy4yMzY4SDEyLjAwMTNWNy4wMzU1MUwxMS45OTk5IDcuMDM0MThMNi4xODEyNyAxMy41OTk1WiIgZmlsbD0iI0NCRjhGRiIvPgo8cGF0aCBkPSJNMjMuMDk4NyAxNi4xMDRDMjQuMSAxNS40Nzg3IDI0LjMwMTMgMTQuMTYxMyAyMy41MjkzIDEzLjI4OTNMMTYuOTY4IDUuODg4QzE2LjQzODcgNS42NDEzMyAxNS44NDUzIDUuNSAxNS4yMTczIDUuNUMxMy45ODQgNS41IDEyLjg4MTMgNi4wMzIgMTIuMTQ4IDYuODY4TDEyLjAwMjcgNy4wMzJMMTcuODIxMyAxMy41OTczTDEyLjAwMTMgMTcuMjM0N1YyMi42NjUzQzEyLjM4NCAyMi42NjUzIDEyLjc2NTMgMjIuNTYxMyAxMy4wOTg3IDIyLjM1MzNMMjMuMDk4NyAxNi4xMDI3VjE2LjEwNFoiIGZpbGw9IiMwNzQ3OTMiLz4KPHBhdGggZD0iTTEyLjAwMTMgMS4zMzMwMVY3LjAzMzAxTDEyLjE0NjcgNi44NjkwMUMxMi44OCA2LjAzMzAxIDEzLjk4MjcgNS41MDEwMSAxNS4yMTYgNS41MDEwMUMxNS44NDUzIDUuNTAxMDEgMTYuNDM3MyA1LjY0MzY3IDE2Ljk2NjcgNS44ODkwMUwxMy41MjggMi4wMTAzNEMxMy4xMjkzIDEuNTU5NjcgMTIuNTY0IDEuMzM0MzQgMTIgMS4zMzQzNEwxMi4wMDEzIDEuMzMzMDFaIiBmaWxsPSIjMDI5NEU0Ii8+CjxwYXRoIGQ9Ik0xNy44MiAxMy41OTkyTDEyLjAwMTMgNy4wMzUxNlYxNy4yMzUyTDE3LjgyIDEzLjU5OTJaIiBmaWxsPSIjOTZCQ0MyIi8+Cjwvc3ZnPgo=',
  description: {
    de: 'Früher Azure AD, ein umfassender cloudbasierter Identitätsverwaltungsdienst.',
    en: 'Formerly Azure AD, a comprehensive cloud-based identity management service.',
    es: 'Antiguamente Azure AD, un completo servicio de gestión de identidad basado en la nube.',
    fr: "Anciennement Azure AD, un service complet de gestion d'identité basé sur le cloud.",
    it: "Precedentemente Azure AD, un servizio completo di gestione dell'identità basato su cloud.",
    ja: '以前は Azure AD、包括的なクラウドベースのアイデンティティ管理サービス。',
    ko: '이전에는 Azure AD로 알려진 포괄적인 클라우드 기반 신원 관리 서비스입니다.',
    'pl-PL': 'Dawniej Azure AD, kompleksowa usługa zarządzania tożsamością w chmurze.',
    'pt-BR':
      'Anteriormente Azure AD, um serviço abrangente de gerenciamento de identidade baseado em nuvem.',
    'pt-PT':
      'Anteriormente Azure AD, um serviço abrangente de gestão de identidade baseado na nuvem.',
    ru: 'Ранее Azure AD, полноценный облачный сервис управления идентичностью.',
    'tr-TR': 'Eskiden Azure AD, kapsamlı bulut tabanlı kimlik yönetimi servisi.',
    'zh-CN': '以前是 Azure AD，全面的基于云的身份管理服务。',
    'zh-HK': '以前是 Azure AD，全面的基於雲端的身份管理服務。',
    'zh-TW': '以前是 Azure AD，全面的基於雲端的身份管理服務。',
  },
  name: {
    en: 'Microsoft Entra ID (SAML)',
  },
  configGuard: samlConnectorConfigGuard,
  constructor: AzureAdSsoConnector,
};
