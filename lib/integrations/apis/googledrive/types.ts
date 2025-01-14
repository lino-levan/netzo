import { z } from "../../../deps/zod/mod.ts";

export const fileSchema = z.object({
  kind: z.string(),
  driveId: z.string(),
  fileExtension: z.string(),
  copyRequiresWriterPermission: z.boolean(),
  md5Checksum: z.string(),
  contentHints: z.object({
    indexableText: z.string(),
    thumbnail: z.object({
      image: z.string(),
      mimeType: z.string(),
    }),
  }),
  writersCanShare: z.boolean(),
  viewedByMe: z.boolean(),
  mimeType: z.string(),
  exportLinks: z.record(z.string()),
  parents: z.array(z.string()),
  thumbnailLink: z.string(),
  iconLink: z.string(),
  shared: z.boolean(),
  lastModifyingUser: z.object({}),
  owners: z.array(z.object({})),
  headRevisionId: z.string(),
  sharingUser: z.object({}),
  webViewLink: z.string(),
  webContentLink: z.string(),
  size: z.string(),
  viewersCanCopyContent: z.boolean(),
  permissions: z.array(z.object({})),
  hasThumbnail: z.boolean(),
  spaces: z.array(z.string()),
  folderColorRgb: z.string(),
  id: z.string(),
  name: z.string(),
  description: z.string(),
  starred: z.boolean(),
  trashed: z.boolean(),
  explicitlyTrashed: z.boolean(),
  createdTime: z.string(),
  modifiedTime: z.string(),
  modifiedByMeTime: z.string(),
  viewedByMeTime: z.string(),
  sharedWithMeTime: z.string(),
  quotaBytesUsed: z.string(),
  version: z.string(),
  originalFilename: z.string(),
  ownedByMe: z.boolean(),
  fullFileExtension: z.string(),
  properties: z.record(z.any()),
  appProperties: z.record(z.any()),
  isAppAuthorized: z.boolean(),
  teamDriveId: z.string(),
  capabilities: z.object({
    canChangeViewersCanCopyContent: z.boolean(),
    canMoveChildrenOutOfDrive: z.boolean(),
    canReadDrive: z.boolean(),
    canEdit: z.boolean(),
    canCopy: z.boolean(),
    canComment: z.boolean(),
    canAddChildren: z.boolean(),
    canDelete: z.boolean(),
    canDownload: z.boolean(),
    canListChildren: z.boolean(),
    canRemoveChildren: z.boolean(),
    canRename: z.boolean(),
    canTrash: z.boolean(),
    canReadRevisions: z.boolean(),
    canReadTeamDrive: z.boolean(),
    canMoveTeamDriveItem: z.boolean(),
    canChangeCopyRequiresWriterPermission: z.boolean(),
    canMoveItemIntoTeamDrive: z.boolean(),
    canUntrash: z.boolean(),
    canModifyContent: z.boolean(),
    canMoveItemWithinTeamDrive: z.boolean(),
    canMoveItemOutOfTeamDrive: z.boolean(),
    canDeleteChildren: z.boolean(),
    canMoveChildrenOutOfTeamDrive: z.boolean(),
    canMoveChildrenWithinTeamDrive: z.boolean(),
    canTrashChildren: z.boolean(),
    canMoveItemOutOfDrive: z.boolean(),
    canAddMyDriveParent: z.boolean(),
    canRemoveMyDriveParent: z.boolean(),
    canMoveItemWithinDrive: z.boolean(),
    canShare: z.boolean(),
    canMoveChildrenWithinDrive: z.boolean(),
    canModifyContentRestriction: z.boolean(),
    canAddFolderFromAnotherDrive: z.boolean(),
    canChangeSecurityUpdateEnabled: z.boolean(),
    canAcceptOwnership: z.boolean(),
    canReadLabels: z.boolean(),
    canModifyLabels: z.boolean(),
    canModifyEditorContentRestriction: z.boolean(),
    canModifyOwnerContentRestriction: z.boolean(),
    canRemoveContentRestriction: z.boolean(),
  }),
  hasAugmentedPermissions: z.boolean(),
  trashingUser: z.object({}),
  thumbnailVersion: z.string(),
  trashedTime: z.string(),
  modifiedByMe: z.boolean(),
  permissionIds: z.array(z.string()),
  imageMediaMetadata: z.object({
    flashUsed: z.boolean(),
    meteringMode: z.string(),
    sensor: z.string(),
    exposureMode: z.string(),
    colorSpace: z.string(),
    whiteBalance: z.string(),
    width: z.number(),
    height: z.number(),
    location: z.object({
      latitude: z.number(),
      longitude: z.number(),
      altitude: z.number(),
    }),
    rotation: z.number(),
    time: z.string(),
    cameraMake: z.string(),
    cameraModel: z.string(),
    exposureTime: z.number(),
    aperture: z.number(),
    focalLength: z.number(),
    isoSpeed: z.number(),
    exposureBias: z.number(),
    maxApertureValue: z.number(),
    subjectDistance: z.number(),
    lens: z.string(),
  }),
  videoMediaMetadata: z.object({
    width: z.number(),
    height: z.number(),
    durationMillis: z.string(),
  }),
  shortcutDetails: z.object({
    targetId: z.string(),
    targetMimeType: z.string(),
    targetResourceKey: z.string(),
  }),
  contentRestrictions: z.array(z.object({})),
  resourceKey: z.string(),
  linkShareMetadata: z.object({
    securityUpdateEligible: z.boolean(),
    securityUpdateEnabled: z.boolean(),
  }),
  labelInfo: z.object({
    labels: z.array(z.object({})),
    sha1Checksum: z.string(),
    sha256Checksum: z.string(),
  }),
}).deepPartial();

export const filesSchema = z.object({
  nextPageToken: z.string(),
  kind: z.string(),
  incompleteSearch: z.boolean(),
  files: z.array(fileSchema),
}).deepPartial();

export const queryFilesSchema = z.object({
  corpora: z.string().optional(),
  driveId: z.string().optional(),
  includeItemsFromAllDrives: z.boolean().optional(),
  orderBy: z
    .union([
      z.literal("createdTime"),
      z.literal("folder"),
      z.literal("modifiedByMeTime"),
      z.literal("modifiedTime"),
      z.literal("name"),
      z.literal("name_natural"),
      z.literal("quotaBytesUsed"),
      z.literal("recency"),
      z.literal("sharedWithMeTime"),
      z.literal("starred"),
      z.literal("viewedByMeTime"),
    ])
    .optional(),
  pageSize: z.number().optional(),
  pageToken: z.string().optional(),
  q: z.string().optional(),
  spaces: z.string().optional(),
  supportsAllDrives: z.boolean().optional(),
  includePermissionsForView: z.literal("published").optional(),
  includeLabels: z.string().optional(),
});

export const queryFileSchema = z.object({
  acknowledgeAbuse: z.boolean().optional(),
  supportsAllDrives: z.boolean().optional(),
  includePermissionsForView: z.literal("published").optional(),
  includeLabels: z.string().optional(),
});

export const dataCopyFileSchema = fileSchema.partial();

//types:

export type File = z.infer<typeof fileSchema>;
export type Files = z.infer<typeof filesSchema>;
export type QueryFiles = z.infer<typeof queryFilesSchema>;
export type QueryFile = z.infer<typeof queryFileSchema>;
export type DataCopyFile = z.infer<typeof dataCopyFileSchema>;
